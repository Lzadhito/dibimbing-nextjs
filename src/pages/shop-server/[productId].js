import axios from "axios";

export async function getServerSideProps(context) {
  const data = await axios.get(`https://api.mudoapi.tech/menu/${context.params.productId}`);
  return {
    props: { productDetail: data.data.data },
  };
}

const DetilProduk = ({ productDetail }) => {
  return <div>{productDetail.name}</div>;
};

export default DetilProduk;
