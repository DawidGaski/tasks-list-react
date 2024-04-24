import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../../TaskPage/searchQueryParamName";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParamas = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParamas.delete(searchQueryParamName);
    } else {
      searchParamas.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParamas.toString()}`);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
