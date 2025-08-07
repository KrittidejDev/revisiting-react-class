import Navbar from "./components/Navbar";
import ProductHighlight from "./components/ProductHighlight";
import ProductCategory from "./components/ProductCategory";
import Footer from "./components/Footer";

// 🛠️ Todo 1 / Step 3: ให้ Import ตัว Component Navbar เพื่อจะนำไป Render ลงใน Component App ด้านล่าง

//     ==== ตัวอย่าง ====

//     import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <>
      <Navbar />
      <ProductHighlight />
      <ProductCategory />
      <Footer />
    </>
  );
}

export default App;
