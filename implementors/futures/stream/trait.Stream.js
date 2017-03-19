(function() {var implementors = {};
implementors["tokio_serde"] = ["impl&lt;T, U, S&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a> for <a class='struct' href='tokio_serde/struct.FramedRead.html' title='tokio_serde::FramedRead'>FramedRead</a>&lt;T, U, S&gt; <span class='where fmt-newline'>where T: <a class='trait' href='https://docs.rs/futures/0.1/futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class='struct' href='https://docs.rs/bytes/0.4/bytes/bytes/struct.Bytes.html' title='bytes::bytes::Bytes'>Bytes</a>: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;T::<a class='trait' href='https://docs.rs/futures/0.1/futures/stream/trait.Stream.html' title='futures::stream::Stream'>Item</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: <a class='trait' href='tokio_serde/trait.Deserializer.html' title='tokio_serde::Deserializer'>Deserializer</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S::<a class='trait' href='tokio_serde/trait.Deserializer.html' title='tokio_serde::Deserializer'>Error</a>: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.From.html' title='core::convert::From'>From</a>&lt;<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
