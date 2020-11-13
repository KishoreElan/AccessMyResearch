//This file is used to test the settings tabs

import { shallowMount } from '@vue/test-utils';
import ManageIgnoredUsersTab from '@/components/Settings/ManageIgnoredUsersTab.vue'

describe('Testing Ignored Users Tab', () => {
    const wrapper = shallowMount(ManageIgnoredUsersTab);

    it('Eye icon switches on hover', () => {
        expect(wrapper.vm.getUnignoreIcon(false)).toBe('eye-slash'); //initial title Hello
        expect(wrapper.vm.getUnignoreIcon(true)).toBe('eye'); // title updates to Hi
    })
})