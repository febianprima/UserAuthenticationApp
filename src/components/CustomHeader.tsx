import { useNavigation } from '@react-navigation/native';
import { ChevronLeftCircle, LucideIcon } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '../constants/colors';

interface ICustomHeaderProps {
  title: string;
  RightIcon?: LucideIcon;
  onRightIconPress?: () => void;
}

const CustomHeader = (props: ICustomHeaderProps) => {
  const { canGoBack, goBack } =
    useNavigation<NavigationStack.AuthorizedStackNavigation>();

  const { title, RightIcon, onRightIconPress } = props;
  const statusBarHeight = useSafeAreaInsets().top;
  const iconTopPosition = statusBarHeight + 8;

  return (
    <View style={styles.container}>
      <View style={{ height: statusBarHeight }} />
      {canGoBack() && (
        <Pressable
          onPress={goBack}
          style={[styles.leftIcon, { top: iconTopPosition }]}
        >
          <ChevronLeftCircle size={24} color={colors.white} />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      {RightIcon && (
        <Pressable
          onPress={onRightIconPress}
          style={[styles.rightIcon, { top: iconTopPosition }]}
        >
          <RightIcon size={24} color={colors.white} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGray,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 20,
    marginBottom: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  rightIcon: {
    position: 'absolute',
    right: 24,
  },
  leftIcon: {
    position: 'absolute',
    left: 24,
  },
});

export default CustomHeader;
