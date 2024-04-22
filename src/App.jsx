import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NoMatch from "./NotFound";
import ResumeBuilder from "./ResumeBuilder";
import Messenger from "./FirstChallenge/Messenger";
import ChatApp from "./SecondChallenge/ChatApp";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ResumeBuilder/>} />
          <Route path="firstchallenge" element={<Messenger/>} />
          <Route path="secondchallenge" element={<ChatApp/>} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
