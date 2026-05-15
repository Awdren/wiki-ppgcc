<template>
  <div class="qualis-search">
    <div class="qualis-controls">
      <input
        v-model="query"
        class="qualis-input"
        type="text"
        placeholder="Buscar por ISSN ou título do periódico…"
        aria-label="Buscar periódico"
      />
      <div class="qualis-filters" role="group" aria-label="Filtrar por estrato">
        <button
          v-for="e in estratos"
          :key="e"
          :class="['estrato-btn', `estrato-${e}`, { active: selectedEstrato === e }]"
          @click="toggleEstrato(e)"
        >{{ e }}</button>
        <button
          v-if="selectedEstrato"
          class="estrato-btn estrato-clear"
          @click="selectedEstrato = null"
          title="Limpar filtro"
        >✕</button>
      </div>
    </div>

    <p class="qualis-count">
      <span v-if="loading">Carregando…</span>
      <span v-else-if="error" style="color:var(--vp-c-danger-1)">Erro ao carregar os dados. Tente recarregar a página.</span>
      <span v-else>{{ filtered.length }} {{ filtered.length === 1 ? 'periódico encontrado' : 'periódicos encontrados' }} <span v-if="filtered.length < total">(de {{ total }})</span></span>
    </p>

    <div v-if="!loading && filtered.length > 0" class="qualis-table-wrap">
      <table class="qualis-table">
        <thead>
          <tr>
            <th>ISSN</th>
            <th>Título</th>
            <th>Estrato</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in paginated" :key="row.issn + row.titulo">
            <td class="col-issn">{{ row.issn }}</td>
            <td class="col-titulo">{{ row.titulo }}</td>
            <td><span :class="['badge', `estrato-${row.estrato}`]">{{ row.estrato }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else-if="!loading" class="qualis-empty">Nenhum periódico encontrado com esses critérios.</p>

    <div v-if="totalPages > 1" class="qualis-pagination">
      <button :disabled="page <= 1" @click="page--">‹ Anterior</button>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <button :disabled="page >= totalPages" @click="page++">Próxima ›</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { withBase } from 'vitepress'

const PAGE_SIZE = 50

interface Periodico {
  issn: string
  titulo: string
  estrato: string
}

const data = ref<Periodico[]>([])
const loading = ref(true)
const error = ref(false)
const query = ref('')
const selectedEstrato = ref<string | null>(null)
const page = ref(1)

const estratos = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C']

onMounted(async () => {
  try {
    const res = await fetch(withBase('/data/qualis-periodicos.json'))
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    data.value = await res.json()
  } catch (e) {
    console.error('[QualisPeriodicos] falha ao carregar dados', e)
    error.value = true
  } finally {
    loading.value = false
  }
})

const total = computed(() => data.value.length)

const filtered = computed(() => {
  const q = query.value.toLowerCase().trim()
  return data.value.filter(row => {
    const matchQuery = !q || row.issn.toLowerCase().includes(q) || row.titulo.toLowerCase().includes(q)
    const matchEstrato = !selectedEstrato.value || row.estrato === selectedEstrato.value
    return matchQuery && matchEstrato
  })
})

const totalPages = computed(() => Math.ceil(filtered.value.length / PAGE_SIZE))

const paginated = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filtered.value.slice(start, start + PAGE_SIZE)
})

watch([query, selectedEstrato], () => { page.value = 1 })

function toggleEstrato(e: string) {
  selectedEstrato.value = selectedEstrato.value === e ? null : e
}
</script>

<style scoped>
.qualis-search { margin-top: 1.5rem; }

.qualis-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.qualis-input {
  flex: 1;
  min-width: 200px;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  outline: none;
}
.qualis-input:focus { border-color: var(--vp-c-brand-1); }

.qualis-filters { display: flex; flex-wrap: wrap; gap: 0.35rem; }

.estrato-btn {
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.65;
  transition: opacity 0.15s, box-shadow 0.15s;
}
.estrato-btn:hover, .estrato-btn.active { opacity: 1; box-shadow: 0 0 0 2px currentColor; }
.estrato-clear { background: var(--vp-c-bg-soft); color: var(--vp-c-text-2); border-color: var(--vp-c-border); opacity: 1; }

.qualis-count { font-size: 0.85rem; color: var(--vp-c-text-2); margin: 0.5rem 0 0.75rem; }

.qualis-table-wrap { overflow-x: auto; }

.qualis-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}
.qualis-table th {
  text-align: left;
  padding: 0.5rem 0.75rem;
  border-bottom: 2px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
  font-weight: 600;
  white-space: nowrap;
}
.qualis-table td {
  padding: 0.4rem 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: top;
}
.qualis-table tr:last-child td { border-bottom: none; }
.col-issn { white-space: nowrap; font-family: monospace; font-size: 0.85rem; width: 110px; }

.badge {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
}

.qualis-empty { color: var(--vp-c-text-2); font-style: italic; }

.qualis-pagination {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
}
.qualis-pagination button {
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}
.qualis-pagination button:disabled { opacity: 0.35; cursor: not-allowed; }

/* Estrato colors */
.estrato-A1 { background: #1a7f3c; color: #fff; }
.estrato-A2 { background: #2ea455; color: #fff; }
.estrato-A3 { background: #59c475; color: #fff; }
.estrato-A4 { background: #a8e6bc; color: #1a4f2a; }
.estrato-B1 { background: #1565c0; color: #fff; }
.estrato-B2 { background: #2979c8; color: #fff; }
.estrato-B3 { background: #64a6e8; color: #fff; }
.estrato-B4 { background: #b3d4f5; color: #0d47a1; }
.estrato-C  { background: #9e9e9e; color: #fff; }
</style>
