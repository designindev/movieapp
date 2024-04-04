import Header from "@/components/Header/header";
import SimpleLayout from "@/components/Layouts/Layout";
import Wrapper from "@/components/Layouts/Wrapper";
import List from "@/components/List/List";

const Movies = () => {
    return (
        <SimpleLayout>
            <Wrapper>
                <Header
                    title="My movies"
                    list={true}
                    logout={true}
                />
                <List />
            </Wrapper>
        </SimpleLayout>
    );
};

export default Movies;
