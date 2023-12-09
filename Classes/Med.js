// MedicationForm.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Med = ({ onSave }) => {
  const [medicineName, setMedicineName] = useState('');
  const [medicineTime, setMedicineTime] = useState('');

  const handleSave = () => {
    onSave({ medicineName, medicineTime });
    setMedicineName('');
    setMedicineTime('');

  };

  return (
    <View>
      <TextInput
        placeholder="Medicine Name"
        value={medicineName}
        onChangeText={setMedicineName}
      />
      <TextInput
        placeholder="Medicine Time"
        value={medicineTime}
        onChangeText={setMedicineTime}
      />
      <Button title="Save Medication" onPress={handleSave} />
    </View>
  );
};

export default Med;
