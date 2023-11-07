import { FunctionComponent } from "react";
import PrimaherySearchAppBar from "./header";

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  return (<>
    <PrimaherySearchAppBar />
  </>);
}

export default Home;