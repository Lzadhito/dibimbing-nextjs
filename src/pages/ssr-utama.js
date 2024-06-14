import axios from "axios";

export async function getServerSideProps() {
  const resp = "BANG LANDO"; //CERITANYA DARI SERVER
  console.log(resp);
  return {
    props: {
      namaBangLando: resp,
    },
  };
}

const HalamanUtamaVersiServer = ({ namaBangLando }) => {
  return (
    <div>
      <div>{namaBangLando}</div>
    </div>
  );
};

export default HalamanUtamaVersiServer;
