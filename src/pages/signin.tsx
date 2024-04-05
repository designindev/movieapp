import Authorization from "@/components/Authorization";
import Layout from "@/components/Layouts/MainLayout"

const SignIn = () => {
    return (
        <Layout>
            <Authorization
                title="Sign in"
            />
        </Layout>
    );
};

export default SignIn;
