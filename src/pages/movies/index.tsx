import Header from "@/components/Main/Header/header";
import SimpleLayout from "@/components/Layouts/MainLayout";
import Wrapper from "@/components/Layouts/Wrapper";
import List from "@/components/List/List";
import useStoreData from "@/lib/services/store";

const Movies = () => {
    const data = useStoreData();

    return (
        <SimpleLayout>
            <Wrapper>
                <Header
                    title="My movies"
                    list={true}
                    logout={true}
                />
                <List data={data} />
            </Wrapper>
        </SimpleLayout>
    );
};

export default Movies;
