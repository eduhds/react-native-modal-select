import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

function RNModalSelect({
  data,
  value,
  placeholder,
  onSelect,
  IconRight,
  renderComponent,
  title,
  cancelText,
  placeholderTextColor,
  disabled,
  containerStyle,
  inputStyle,
  modalContainerStyle,
  titleStyle,
  cancelButtonStyle,
  cancelTextStyle,
  listContainerStyle,
  itemContainerStyle,
  itemImageStyle,
  itemTextStyle,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => setVisible(true)}
        style={[styles.container, containerStyle]}
      >
        {renderComponent ? (
          renderComponent()
        ) : (
          <TextInput
            editable={false}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            style={[styles.input, inputStyle]}
          />
        )}
        {Boolean(IconRight) && (
          <View style={[styles.iconRight]}>
            <IconRight />
          </View>
        )}
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={[styles.modalContainer, modalContainerStyle]}>
          <Text style={[styles.title, titleStyle]}>{title || "Selecione"}</Text>

          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                key={`${item.key}-${index}`}
                onPress={() => {
                  onSelect(item.value);
                  setVisible(false);
                }}
                style={[styles.itemContainer, itemContainerStyle]}
              >
                {Boolean(item.image) && (
                  <Image
                    source={
                      typeof item.image === "string"
                        ? { uri: item.image }
                        : item.image
                    }
                    style={[styles.itemImage, itemImageStyle]}
                  />
                )}
                <Text style={[styles.itemText, itemTextStyle]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => `${item.key}-${index}`}
            style={[styles.listContainer, listContainerStyle]}
          />

          <TouchableOpacity
            style={[styles.cancelButton, cancelButtonStyle]}
            onPress={() => setVisible(false)}
          >
            <Text style={[styles.cancelText, cancelTextStyle]}>
              {cancelText || "Cancelar"}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

export default RNModalSelect;

const styles = StyleSheet.create({
  container: { height: 50, flexDirection: "row", alignItems: "center" },
  input: { flex: 1 },
  iconRight: { alignItems: "center", justifyContent: "center" },
  modalContainer: { flex: 1, backgroundColor: "#FFFFFF" },
  title: {
    color: "#444444",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  listContainer: { flex: 1 },
  itemContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "#444444",
  },
  itemImage: {
    width: 35,
    height: 35,
    marginRight: 5,
    borderRadius: 4,
  },
  itemText: { fontSize: 16, color: "#444444" },
  cancelButton: { padding: 15, alignSelf: "center" },
  cancelText: { fontSize: 16, fontWeight: "bold", color: "#444444" },
});
