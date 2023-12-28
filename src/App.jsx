import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import DocsList from "./components/DocsList";
import DocInfo from "./components/DocInfo";
import CategoriesList from "./components/CategoriesList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AlertToaster from "./components/AlertToaster";
import CategoryInfo from "./components/CategoryInfo";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

// ANshl4xYCvjvl2xh

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }>
            <Route index element={<DocsList />} />
            <Route path="docs" element={<DocsList />} />
            <Route path="docs/:id" element={<DocInfo />} />
            <Route path="categories" element={<CategoriesList />} />
            <Route path="categories/:el" element={<CategoryInfo />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <AlertToaster />
    </QueryClientProvider>
  );
}

export default App;

// K2CgiVL?G7jBexz
