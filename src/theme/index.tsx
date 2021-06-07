const light = {
    header: {
        color: '#FFF',
        background: '#273FAD'
    },
    search:{
        input:{
            placeholder: '#CCC', 
            color: '#333',  
            background: '#F5F4F8',

        },
        button:{
            background: '#3FAD27',
            color: '#FFF',
        }
    },
    colors: {
        primary: '#3D3D4D',
        secundary: '#3D3D4D',
    },
    backgrounds: {
        primary: '#FFF',
        secundary: '#FFF',
    },
    shadow:{
        color: '#000'
    },
    task:{
        strikethrough: '#A09CB1',
        done: {
            primary: '#273FAD',
            secundary: 'rgba(25, 61, 223, 0.1)',
        }, 
        undone: {
            primary: '#333',
            secundary: '#333',
        }, 
    }
}
const dark = {
    header: {
        color: '#FFF',
        background: '#282B5A'
    },
    search:{
        input:{
            placeholder: '#FFF', 
            color: '#E1E1E6',  
            background: '#413A6F',

        },
        button:{
            background: '#9347CA',
            color: '#FFF',
        }
    },
    colors: {
        primary: '#3D3D4D',
        secundary: '#FFF',
    },
    backgrounds: {
        primary: '#181D3A',
        secundary: '#FFF',
    },
    shadow:{
        color: '#000'
    },
    task:{
        strikethrough: '#E1E1E6',
        done: {
            primary: '#9347CA',
            secundary: 'rgba(68, 58, 111, 0.5)',
        }, 
        undone: {
            primary: '#333',
            secundary: '#333',
        }
    }

}

export const themes ={
    light, 
    dark
}