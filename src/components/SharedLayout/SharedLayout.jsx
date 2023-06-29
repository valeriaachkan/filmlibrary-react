import { PageContainer} from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";

export const SharedLayout = () => {
    return (
        <PageContainer>
            <Header />
            <Outlet />
        </PageContainer>
    )
}