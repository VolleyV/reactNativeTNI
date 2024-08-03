import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#9A9A9A",
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    fontSize: 18,
    color: "#0031B3",
    fontWeight: "800",
  },
});

const stylesPratice = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 16, 
    backgroundColor: '#ffffff' 
  }, 
  header: { 
    padding: 16, 
    backgroundColor: '#a9d0e5', 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd', 
    marginTop: 100,
  }, 
  fullname: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 4 
  }, 
  message: { 
    fontSize: 18, 
    color: '#666' 
  }, 
  content: { 
    padding: 16, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#bfd6e2', 
    borderRadius: 8, 
    marginVertical: 16, 
    width: '90%' 
  }, 
  text: { 
    fontSize: 18, 
    marginBottom: 8, 
    color: '#444' 
  }, 
  footer: { 
    padding: 16, 
    backgroundColor: '#f8f8f8', 
    width: '100%', 
    alignItems: 'center', 
    position: 'absolute', 
    bottom: 0, 
borderTopWidth: 1, 
borderTopColor: '#ddd' 
}, 
input: { 
height: 40, 
borderColor: 'gray', 
borderWidth: 1, 
marginTop: 16, 
paddingHorizontal: 8, 
width: '80%', 
borderRadius: 8,
marginBottom: 500,
} 
}); 

export { styles, stylesPratice };
