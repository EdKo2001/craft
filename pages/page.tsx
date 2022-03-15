import { Editor, Frame, Element } from "@craftjs/core";
import { Container } from "../components/selectors";
import { NextPageContext } from "next";

const Page = (props) => {
  return (
    <div>
      <h2>My App!</h2>
      <Editor
        resolver={{
          Container,
        }}
      >
        <h2>My Page Editor</h2>
        <Frame data={props?.formattedData}>
          {/* <Frame> */}
          <Element is={Container} canvas>
            // defines the Root Node
            <h2>Drag me around</h2>
            <Element is="div" style={{ background: "#333" }}>
              <p>Same here</p>
            </Element>
          </Element>
        </Frame>
      </Editor>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await import("../data/example.json");
  const formattedData = JSON.stringify(data);

  // Pass data to the page via props
  return { props: { formattedData } };
}

export default Page;
