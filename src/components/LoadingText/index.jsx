import { useEffect } from "react";
import { LoadingContainer, ProgressBar, StyledLoadingText } from "./style";
import { useState } from "react";

export default function LoadingText({text}) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula o término do carregamento após 2 segundos
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    }, []);

    return (
            <LoadingContainer>
                <StyledLoadingText>
                    {text}
                </StyledLoadingText>
              {isLoading ? <ProgressBar /> : null}
            </LoadingContainer>
    )
}