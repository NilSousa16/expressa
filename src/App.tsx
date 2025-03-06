import React from 'react';
import { Dimensions, FlatList, StyleSheet, StatusBar, View, Text, TouchableOpacity, ScrollView } from 'react-native';


const DATA = [
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
    { id: '3', title: 'Third Item' },
    { id: '4', title: 'Fourth Item' },
    { id: '5', title: 'Fifth Item' },
    { id: '6', title: 'Sixth Item' },
    { id: '7', title: 'Seventh Item' },
    { id: '8', title: 'Eighth Item' },
    { id: '9', title: 'Ninth Item' },
];

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 2.5; // Ajusta para caber duas colunas com espaçamento adequado

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const handlePress = (title: string) => {
    console.log(`Clicou em: ${title}`);
};

const Header = () => (
    <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => console.log("Menu aberto")}>
            {/* <Ionicons name="menu" size={28} color="black" /> */}
            <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Expressa</Text>
    </View>
);

const App: React.FC = () => (
    
    <>
        <StatusBar animated={true} backgroundColor="#EDB552" barStyle="default" />
        <View style={{ flex: 1, backgroundColor: '#EDB552' }}>
        <Header />
            <FlatList
                data={DATA}
                // style={{ flex: 1, backgroundColor: '#EDB552' }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => handlePress(item.title)}>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem
            />
            
        </View>
    </>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DAA520',
        height: 70,
        paddingHorizontal: 15,
        elevation: 4,
    },
    menuButton: {
        position: 'absolute',
        left: 15,
        top: 15,
        padding: 5,
    },
    menuIcon: {
        fontSize: 28, 
        fontWeight: 'bold',
        color: '#FFF',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFF',
    },
    item: {
        backgroundColor: '#24C232', // Verde vibrante
        width: itemSize, // Largura dinâmica
        height: itemSize, // Altura igual à largura (quadrado)
        borderRadius: 20, // Bordas arredondadas
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        margin: 10, // Espaçamento entre os itens
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Efeito de sombra para Android
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF', // Texto branco
        textAlign: 'center',
    },
    listContainer: {
        paddingBottom: 20, // Evita que o último item fique colado no final
    },
    columnWrapper: {
        justifyContent: 'space-between',
        paddingHorizontal: 10, // Mantém espaçamento nas laterais
    },
});

export default App;
