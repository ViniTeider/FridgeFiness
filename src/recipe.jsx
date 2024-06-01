import Logo from './assets/logo.svg'
import { ConfigProvider} from 'antd'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Recipe() {
    const location = useLocation();
    const { state } = location;
    const { api_response } = state;
    const [isLoading, setIsLoading] = useState(true);	// Loading state
    const [selectedRecipe, setSelectedRecipe] = useState(null);	// Selected recipe
    
    const primaryColor = '#A53420'
    const primaryWhite = '#D2D2D2'
    const textColor = '#333333'


    useState(() => {
        if (api_response.recipes) setIsLoading(false)
    }, [api_response])

    useState(() => {
        console.log(selectedRecipe)
    }, [selectedRecipe])

    // ------------- Render ------------- //

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
            <div style={{flex: 1, height: '100vh', width: '100vw'}}>

                {/* Header */}
                <a href="/" >
                    <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
                        <img src={Logo} style={{width: 55, height: 55}} />
                        <h1 style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: '#000000', marginLeft: 20}}>
                        Fridge Finesse
                        </h1>
                    </div>
                </a>

                {/* Main div */}
                <div style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-evenly', display: 'flex', marginTop: "10%"}}>                 
                    
                    {api_response.recipes && api_response.recipes.length > 0 ? (
                        <>
                            {/* Div esquerda */}
                            <div style={{width: '50%', height: "50%", backgroundColor: primaryWhite, borderRadius: 12, padding: 45, overflow: 'auto', alignContent: 'center'}}>
                                {selectedRecipe ? (
                                    <>
                                        <h1 style={{textAlign: 'left', fontSize: 40, fontWeight: 'bold', color: textColor, marginBottom: 20}}>
                                            {selectedRecipe.recipeName}
                                        </h1>
                                        <p style={{textAlign: 'left', fontSize: 24, fontWeight: '500', color: textColor, marginBottom: 20}}>
                                            {selectedRecipe.shortDescription}
                                        </p>
                                        <h1 style={{textAlign: 'left', fontSize: 32, fontWeight: 'bold', color: textColor, marginBottom: 20}}>
                                            Ingredientes
                                        </h1>
                                        <ul style={{textAlign: 'left', fontSize: 24, fontWeight: '500', color: textColor, marginBottom: 20}}>
                                            {Object.entries(selectedRecipe.ingredients).map(([ingredient, quantity], index) => (
                                                <li key={index}>{ingredient} - {quantity}</li>
                                            ))}
                                        </ul>
                                        <h1 style={{textAlign: 'left', fontSize: 32, fontWeight: 'bold', color: textColor, marginBottom: 20}}>
                                            Modo de preparo
                                        </h1>
                                        <p style={{textAlign: 'left', fontSize: 16, color: textColor, marginBottom: 20}}>
                                            {selectedRecipe.methodOfPreparation.split(/\d+\./).map((instruction, index) => {
                                                if (index !== 0) {
                                                    return <>{index}. {instruction}<br/></>
                                                } else {
                                                    return <>{instruction}</>
                                                }
                                            })}
                                        </p>
                                    </>
                                ) : (
                                    <h1 style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: textColor, marginBottom: 20}}>
                                        Selecione uma receita
                                    </h1>
                                )}
                            </div>

                            {/* Div direita */}
                            <div style={{width: '30%', height: '54%', backgroundColor: primaryWhite, borderRadius: 12, padding: 25, overflow: 'auto'}}>
                                <h1 style={{textAlign: 'left', fontSize: 40, fontWeight: 'bold', color: textColor}}>
                                    Alternativas
                                </h1> 

                                {api_response.recipes.map((recipe, index) => (
                                    <div key={index} style={{cursor: 'pointer', borderRadius: 20, backgroundColor: '#F0F0F0', padding: 10, marginTop: 15, border: 'solid', borderWidth: 5, borderColor: selectedRecipe == recipe ? '#E45250' : '#F0F0F0'}} onClick={() => setSelectedRecipe(recipe)}>
                                        <h2 style={{textAlign: 'left', fontSize: 32, fontWeight: 'bold', color: textColor, marginBottom: 5}}>
                                            {recipe.recipeName}
                                        </h2>
                                        <h3 style={{textAlign: 'left', fontSize: 16,  color: textColor, marginBottom: 5}}>
                                            {recipe.shortDescription}
                                        </h3>
                                    </div>
                                ))}

                            </div>

                        </>
                    ) : (
                        <h1 style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: '#000000', marginBottom: 20}}>
                            Não foram encontradas receitas
                        </h1>
                    )}

                </div>

            </div>
    )
}

export default Recipe
