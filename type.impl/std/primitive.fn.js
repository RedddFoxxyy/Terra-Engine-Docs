(function() {
    var type_impls = Object.fromEntries([["pyo3",[]],["pyo3_ffi",[]],["sdl3",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[11,16,12]}