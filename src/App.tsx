
import { useRef } from "react";
import Applybtn from "./componets/Applybtn";
import Home from "./componets/Home";
import Process from "./componets/Process";
import Ranking from "./componets/Ranking";

const App: React.FC = () => {
  
  const firstComponentRef = useRef<HTMLDivElement>(null);

  const handleScrollToFirstComponent = () => {
    if (firstComponentRef.current) {
      firstComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Home ref={firstComponentRef}/>
      <Process/>
      <Ranking/>
      <Applybtn scrollToTarget={handleScrollToFirstComponent}/>
    </div>
  );
};

export default App;
