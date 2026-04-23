import { Pressable, Text } from "react-native";
import { ReactNode } from "react";
import { useRouter } from "expo-router";

interface PrimaryButtonProps {
  title: string;
  icon?: ReactNode;
  onPress: () => void;
}

export const PrimaryButton = ({ title, icon, onPress }: PrimaryButtonProps) => {

  const router = useRouter();
  return (
    <Pressable onPress={onPress}
      style={({ pressed }) => ({
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: pressed ? '#007AFF' : 'transparent',
        borderWidth: 2,
        borderColor: '#007AFF',
        padding: 12,
        borderRadius: 25,
        height: 55,
        marginTop: 12,

      })} onPressOut={() => {
        router.push({ pathname: "/(auth)/email", params: {}, });
      }}>
      {icon}
      <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
    </Pressable>
  );
}