# vue 3 emits
``` 
in parent:
    <ImageUploader @modal="updateModal" />

in child: 
    emits: ['modal'],
    setup(props, { emit }) {
    emit('modal', newValue)
}
``` 

# disable cursor on div
``` 
caret-color: transparent;
``` 
