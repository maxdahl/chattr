import {
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route
          path="conversations"
          element={
            <div>
              <div>Conversations</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":id" element={<div>Conversation ID Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
