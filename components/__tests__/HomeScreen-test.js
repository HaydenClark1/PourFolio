import React from "react";
import { render } from '@testing-library/react-native';
import HomeScreen from "../../app/(tabs)/index";


describe("HomeScreen", () => {
    it("renders the logo image correctly", ()=>{
        const { getByTestId } = render(<HomeScreen />);

        const logo = getByTestId("home-logo");

        expect(logo).toBeTruthy();
        expect(logo.props.style.resizeMode).toBe("contain");

    });
})