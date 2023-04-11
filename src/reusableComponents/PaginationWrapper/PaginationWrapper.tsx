import {Pagination} from "@mui/material";
import React from "react";

interface IPaginationWrapperProps {
    counts: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const PaginationWrapper: React.FC<IPaginationWrapperProps> = ({counts, page, onChange}) => {
    return <Pagination count={counts} page={page} onChange={onChange}/>
}