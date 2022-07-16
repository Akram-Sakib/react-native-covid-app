import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { Feather, Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { spacing } from "./../theme/spacing";
import { typography } from "../theme/typography";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContent}>
        <View style={styles.menuBar}>
          <Feather name="menu" size={24} color={colors.white} />
          <Ionicons name="notifications" size={24} color={colors.white} />
        </View>
        <View style={styles.titleContent}>
          <Text preset="h1">Covid-19</Text>
          <View style={styles.dropdown}>
            <Image source={require("./../../assets/images/usa-img.png")} />
            <Text preset="h4" style={{ color: colors.black }}>
              USA
            </Text>
            <AntDesign name="caretdown" size={18} color={colors.lightBlack} />
          </View>
        </View>
        <View style={styles.content}>
          <Text preset="h2">Are you feeling sick?</Text>
          <Text style={styles.contentText} preset="small">
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, { backgroundColor: colors.red }]}>
            <FontAwesome5 name="phone-alt" size={16} color={colors.white} />
            <Text style={{ marginLeft: spacing[4] }} preset="h4">
              Call Now
            </Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: colors.blue }]}>
            <Ionicons name="chatbubble" size={20} color={colors.white} />
            <Text style={{ marginLeft: spacing[4] }} preset="h4">
              Send SMS
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.prevention}>
        <Text style={styles.preventionTitle} preset="h2">
          Prevention
        </Text>
        <View style={styles.preventionContainer}>
          <View style={styles.preventionTips}>
            <Image
              style={styles.preventionImg}
              source={require("./../../assets/images/human-distance.png")}
            />
            <Text preset="h4" style={styles.imgCaption}>
              Avoid close contact
            </Text>
          </View>
          <View style={styles.preventionTips}>
            <Image
              style={styles.preventionImg}
              source={require("./../../assets/images/washing-hand.png")}
            />
            <Text preset="h4" style={styles.imgCaption}>
              Clean your hands often
            </Text>
          </View>
          <View style={styles.preventionTips}>
            <Image
              style={styles.preventionImg}
              source={require("./../../assets/images/masked-human.png")}
            />
            <Text preset="h4" style={styles.imgCaption}>
              Wear a facemask
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.doctorTest}>
        <LinearGradient
          start={{ x: 1, y: 1 }}
          colors={[colors.gradiant1, colors.gradiant2]}
          style={styles.background}
        />
        <Image
          style={styles.medicImg}
          source={require("./../../assets/images/medic.png")}
        />
        <View style={styles.testContent}>
          <Text preset="h3" style={styles.testTitle}>
            Do your own test!
          </Text>
          <Text preset="small" style={styles.testSubtitle}>
            Follow the instructions to do your own test.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgWhite,
  },
  topContent: {
    height: 358,
    backgroundColor: colors.darkBlue,
    borderBottomLeftRadius: 40,
    borderBottomEndRadius: 40,
    padding: spacing[7],
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing[11],
    marginTop: spacing[6],
  },
  titleContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdown: {
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    padding: spacing[3],
    alignItems: "center",
    width: 100,
    borderRadius: 30,
  },
  content: {
    marginTop: spacing[11],
  },
  contentText: {
    fontSize: 14,
    opacity: 0.8,
    marginTop: spacing[4],
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing[5],
  },
  button: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[7],
    paddingVertical: 12,
    borderRadius: 50,
  },
  prevention: {
    marginTop: spacing[9],
    paddingHorizontal: spacing[7],
  },
  preventionTitle: {
    marginBottom: spacing[7],
    color: colors.black,
    fontFamily: typography.primaryBold,
  },
  preventionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  preventionTips: {
    textAlign: "center",
    alignItems: "center",
  },
  preventionImg: {
    marginBottom: spacing[4],
  },
  imgCaption: {
    width: 110,
    textAlign: "center",
    color: colors.black,
  },
  doctorTest: {
    marginTop: spacing[11],
    flexDirection: "row",
    margin: spacing[7],
    justifyContent: "space-between",
    paddingHorizontal: spacing[2],
    height: 102,
    backgroundColor: "green",
    borderRadius: 20,
  },
  medicImg: {
    marginTop: -13,
  },
  testContent: {
    width: 180,
    marginTop: 20,
  },
  testTitle: {
    marginBottom: 5,
  },
  testSubtitle: {
    opacity: 0.8,
    fontSize: 14,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 103,
    borderRadius: 20,
  },
});
