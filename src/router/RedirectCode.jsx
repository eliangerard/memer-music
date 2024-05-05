import { Navigate, useSearchParams } from "react-router-dom"

export const RedirectCode = () => {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    return (
        <>
            <Navigate to={`/home/${code !== null ? code : ''}`} />
        </>
    )
}
