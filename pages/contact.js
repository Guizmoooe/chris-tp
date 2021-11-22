import MainLayout from "../Layout/MainLayout"
import { getCategories } from "../lib/api";

const Contact = ({categories = []}) => {
    return (
        <MainLayout categories={categories}>
        <h1>Hello World</h1>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const { categories } = await getCategories();
  
    return {
      props: { categories },
    };
  }
  
export default Contact;