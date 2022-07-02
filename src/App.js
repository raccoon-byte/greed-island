import { Route, Routes } from "react-router-dom";

import MainPage from "./routes/main-page/main-page.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
