function uid() {
  return new Date().getTime().toString(36);
}

export function EditablePage() {
  const initialBlock = {
    id: uid(),
    tag: "p",
    html: "This is the first block of text in the page. You can edit it by clicking on the text.",
  };

  const [blocks, setBlocks] = useState([initialBlock]);

  return (
    <>
      {blocks.map((block, index) => {
        return (<div id={block.id} key={index}>
          Tag: {block.tag}, Content: {block.html}
        </div>);
      })}
    </>
  )
}