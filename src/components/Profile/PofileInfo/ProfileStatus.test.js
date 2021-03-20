import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'test status'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test status');
    });

    test('after creation span  with correct status should be displayed', () => {
        const component = create(<ProfileStatus status={'test status'} />);
        const instance = component.root;
        let span = instance.findByType('span');
        expect(span.children.length).toBe(1);
    });

    test('after creation span should be displayed text', () => {
        const component = create(<ProfileStatus status={'test status'} />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('test status');
    });

    test('input should be  displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'test status'} />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('test status');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'test status'} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})