import PlainCss from "./components/plainCss";
import CssProcessor from "./components/cssProcessor";
import InlineStyle from "./components/inlineStyle";
import CssInModule from "./components/cssModule";
import CssInJS from "./components/cssInJS";

function App() {
  return (
    <div>
      <PlainCss />
      <CssProcessor />
      <InlineStyle />
      <CssInModule />
      <CssInJS />
    </div>
  );
}

export default App;
