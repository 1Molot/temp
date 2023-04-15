import React from "react";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reduser";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED} )

    //expection
    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED} )

    //expection
    expect(newState.collapsed).toBe(false);
})

test('collapsed throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    // action
    expect( () => {
        reducer(state, {type: "FAKE"})
    }).toThrowError();
})