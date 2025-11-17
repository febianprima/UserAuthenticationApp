import { useNavigation } from '@react-navigation/native';
import { ChevronLeftCircle } from 'lucide-react-native';
import React, { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IContentContainerProps {
  title: string;
  description: string;
}

const ContentContainer = (
  props: PropsWithChildren & IContentContainerProps,
) => {
  const { title, description, children } = props;
  const { goBack, canGoBack } =
    useNavigation<NavigationStack.UnauthorizedStackNavigation>();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          {canGoBack() && (
            <Pressable onPress={goBack}>
              <ChevronLeftCircle size={24} color="white" />
            </Pressable>
          )}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  headerContainer: {
    gap: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionText: {
    fontSize: 16,
    color: '#DADBDD',
  },
});

export default ContentContainer;
