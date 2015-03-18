var remove = ['ctrl-alt-[', 'ctrl-alt-]'];
atom.keymap.keyBindings = atom.keymap.keyBindings.filter(function (binding, i) {
    return remove.indexOf(binding.keystroke) == -1;
});
