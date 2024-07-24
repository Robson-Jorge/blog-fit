import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../page/Home'
import { Blog } from '../page/Blog'
import { Sobre } from '../page/Sobre'
// import { Produtos } from '../page/Produtos'
import { Receitas } from '../page/Receitas'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ScrollToTop } from '../components/ScrollToTop'
import { Treinos } from '../page/Treinos'

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DefaultLayout />}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/receita/:nome" element={<Receitas />} />
        </Route>
        <Route path="/treinos" element={<Treinos />} />
      </Routes>
    </BrowserRouter>
  )
}
