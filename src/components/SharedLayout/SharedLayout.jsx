import {  Suspense } from "react";
import { PageContainer} from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { Outlet } from "react-router";
import BeatLoader from 'react-spinners/ClipLoader';

const override = {
	display: 'block',
	margin: '100px auto',
};


export const SharedLayout = () => {
    return (
        <PageContainer>
            <Header />
            <Suspense fallback={<BeatLoader
	color={'#9c92f8'}
	cssOverride={override}
	size={150}
	aria-label="Loading Spinner"
	data-testid="loader"
/>}>
            <Outlet />
            </Suspense>
        </PageContainer>
    )
}