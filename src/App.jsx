import { useEffect, useState } from 'react'
import { Button, Input, Slider, ConfigProvider } from 'antd'
import Logo from './assets/logo.svg'
import { Send, X } from 'lucide-react'

function App() {
  const primaryColor = '#A53420' // Primary color for elements
  const primaryWhite = '#F0F0F0'

  const [tags, setTags] = useState([]) // Tags for the ingredients
  const [inputValue, setInputValue] = useState('') // Value of the input
  const [timeValue, setTimeValue] = useState(60) // Value of the slider [30, 120]
  const [isDisabled, setIsDisabled] = useState(true) // Button disabled [true, false

  
  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue])
      setInputValue('') // Clear the input
    }
  }


  const handleDeleteTag = (tagIndex) => {
    setTags(tags.filter((tag, index) => index !== tagIndex))
  }


  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }


  useEffect(() => {
    setIsDisabled(tags.length === 0)
  }, [tags])
  

  return (
    // Provider is used to change the color of the little dot on the slider (it was a really bad blue :T)
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            handleActiveColor: primaryColor,
            handleColor: primaryColor,
          },
        },
      }}
    >
      <div style={{flex: 1}}>

        {/* Header */}
        <div style={{width: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
          <img src={Logo} style={{width: 55, height: 55}} />
          <h1 style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold', color: '#000000', marginLeft: 20}}>
            Fridge Finesse
          </h1>
        </div>

        {/* Main div */}
        <div style={{width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: "10%"}}>

          {/* Buttons */}
          <div style={{flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'center', paddingLeft: '20%', paddingRight: '20%'}}>
            <Button
              style={{height: 50, backgroundColor: primaryColor, fontSize: 24, marginRight: 17, fontWeight: 'bold', color: primaryWhite, borderRadius: 16, border: 'none', paddingLeft: 30, paddingRight: 30}}
              onClick={() => console.log('clicked')}
            >
              Tipo
            </Button>
            <Button
              style={{height: 50,  backgroundColor: primaryColor, fontSize: 24, marginRight: 17, fontWeight: 'bold', color: primaryWhite, borderRadius: 16, border: 'none', paddingLeft: 30, paddingRight: 30}}
              onClick={() => console.log('clicked')}
            >
              Restrição
            </Button>
            <Button
              style={{height: 50, backgroundColor: primaryColor, fontSize: 24, marginRight: 17, fontWeight: 'bold', color: primaryWhite, borderRadius: 16, border: 'none', paddingLeft: 30, paddingRight: 30}}
              onClick={() => console.log('clicked')}
            >
              Dificuldade
            </Button>
            <Button
              style={{height: 50, backgroundColor: primaryColor, fontSize: 24, marginRight: 17, fontWeight: 'bold', color: primaryWhite, borderRadius: 16, border: 'none', paddingLeft: 30, paddingRight: 30}}
              onClick={() => console.log('clicked')}
            >
              Cozinha
            </Button>
          </div>

          <Input 
            type='large' 
            placeholder='Ingredientes' 
            suffix={<Send width={30} height={30} onClick={handleAddTag} />} 
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleAddTag()
              }
            }}
            style={{width: "40%", maxWidth: 421, marginTop: "2%", borderRadius: 20, borderColor: '#333333', borderWidth: 3, fontSize: 32, fontWeight: 'bold'}}
          />

          {/* Tags */}
          <div style={{flex: 1, flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10, flexWrap: 'wrap', width: "38%", maxWidth: 407}}>
            {tags.map((tag, index) => (
              <>
                <Button
                  style={{height: 28,flexDirection: 'row', backgroundColor: '#E45250', fontSize: 12, marginRight: 13, marginTop: 8, fontWeight: 'bold', color: primaryWhite, borderRadius: 8, border: 'none', paddingLeft: 6, paddingRight: 6, justifyContent: 'center', alignItems: 'center'}}
                  onClick={() => handleDeleteTag(index)}
                >
                  <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', alignSelf: 'center'}}>
                    {tag} <X width={15} height={20} fontWeight={'bold'} style={{marginLeft: 4}} />
                  </div>
                </Button>
              </>
            ))}
          </div>

          {/* Slider */}
          <div style={{flex: 1, width:'40%', maxWidth: 407, justifyContent: 'center', marginTop: 20}}>
            <Slider 
              defaultValue={60} min={30} max={120}  
              onChange={value => setTimeValue(value)}
              styles={{
                track: {
                  backgroundColor: primaryColor,
                },
                rail: {
                  backgroundColor: '#333333',
                },
                handle: {
                  dotActiveBorderColor: primaryColor,
                }
              }}
              tooltip={{ formatter: null }}
            />
            <p style={{fontSize: 16, fontWeight: 'bold', color: '#000000', marginTop: 10, textAlign: 'center'}}>Tempo: {timeValue} minutos</p>
          </div>

          {/* Button */}
          <Button
            style={{height: 125, backgroundColor: isDisabled ? '#AAAAAA' : primaryColor, fontSize: 64, marginTop: 50, fontWeight: 'bold', color: primaryWhite, borderRadius: 16, border: 'none', paddingLeft: 80, paddingRight: 80}}
            onClick={() => console.log('clicked')}
            disabled={isDisabled}
          >
            Gerar
          </Button>

        </div>

      </div>
    </ConfigProvider>
  )
}

export default App
