import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?seed=1&page=1&results=10')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1,padding:24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ email }, index) => email}
          renderItem={({ item }) => (
            <Text style={{color:'red',padding:24,fontSize:24}}>FirstName:  {item.name.first}  Age: {item.dob.age}</Text>
          )}
        />
      )}
    </View>
  );
};

export default Dashboard;