(function() {var implementors = {};
implementors["tokio_serde"] = ["impl&lt;T, U, S&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/sink/trait.Sink.html' title='futures::sink::Sink'>Sink</a> for <a class='struct' href='tokio_serde/struct.FramedWrite.html' title='tokio_serde::FramedWrite'>FramedWrite</a>&lt;T, U, S&gt; <span class='where fmt-newline'>where T: <a class='trait' href='https://docs.rs/futures/0.1/futures/sink/trait.Sink.html' title='futures::sink::Sink'>Sink</a>&lt;SinkItem=<a class='struct' href='https://docs.rs/bytes/0.4/bytes/bytes/struct.BytesMut.html' title='bytes::bytes::BytesMut'>BytesMut</a>, SinkError=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='tokio_serde/trait.Serializer.html' title='tokio_serde::Serializer'>Serializer</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S::<a class='trait' href='tokio_serde/trait.Serializer.html' title='tokio_serde::Serializer'>Error</a>: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.Into.html' title='core::convert::Into'>Into</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
