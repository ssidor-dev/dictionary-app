import Header from "./components/header/Header";
import MainContainer from "./components/ui/MainContainer";
import Search from "./components/search/Search";
import DefinitionContainer from "./components/ui/DefinitionContainer";
import Definition from "./components/definition/Definition";
import DefinitionHeader from "./components/definition/definition-header/DefinitionHeader";
import DefinitionFooter from "./components/definition/DefinitionFooter";
import Error from "./components/ui/Error";
import Loader from "./components/ui/Loader";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  // using custom hook useLocalStorage to keep the light/dark mode toggle state saved
  const [isCheckedValue, setIsCheckedValue] = useLocalStorageState(
    false,
    "toggle"
  );
  // using custom hook useFetch to handle the API call and user searchQuery
  const { data, error, isLoading } = useFetch(searchQuery);

  // takes the first index of the data array that is returned from the useFetch custom hook which is the word that is searched and returned by the API
  const definitionData = data[0];

  return (
    <div className={isCheckedValue ? "dark-mode" : ""}>
      <MainContainer>
        <Header
          toggle={isCheckedValue}
          onToggle={() => setIsCheckedValue((curValue) => !curValue)}
        />
        <Search onSearch={setSearchQuery} />
        {isLoading && <Loader />}
        {!isLoading && !error && definitionData ? (
          <DefinitionContainer>
            <DefinitionHeader
              word={definitionData.word}
              phonetics={definitionData.phonetics}
              phonetic={definitionData.phonetic}
            />

            {definitionData.meanings.map((definition) => {
              return (
                <Definition
                  key={Math.random()}
                  partOfSpeech={definition.partOfSpeech}
                  definitions={definition.definitions}
                  synonyms={definition.synonyms}
                  antonyms={definition.antonyms}
                />
              );
            })}

            {definitionData.sourceUrls[0] && (
              <DefinitionFooter definitionData={definitionData} />
            )}
          </DefinitionContainer>
        ) : (
          ""
        )}
        {error && <Error message={error} query={searchQuery} />}
      </MainContainer>
    </div>
  );
}

export default App;
