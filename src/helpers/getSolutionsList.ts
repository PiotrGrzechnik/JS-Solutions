import {ListPath} from "src/types";

export const getSolutionsList = (path: ListPath): void => {
    const category = path[0];
    const subcategory = path[1];
    import(`../data/${category}/${subcategory}`)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};
