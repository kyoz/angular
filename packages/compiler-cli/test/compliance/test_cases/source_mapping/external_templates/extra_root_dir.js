i0.ɵɵelementStart(0, "div") // SOURCE: "/extraRootDir/dir/extra.html" <div>
…
i0.ɵɵtext(1, "this is a test") // SOURCE: "/extraRootDir/dir/extra.html" this is a test
…
i0.ɵɵelementEnd() // SOURCE: "/extraRootDir/dir/extra.html" </div>
…
i0.ɵɵelementStart(2, "div") // SOURCE: "/extraRootDir/dir/extra.html" <div>
…
i0.ɵɵtext(3) // SOURCE: "/extraRootDir/dir/extra.html" {{ 1 + 2 }}
…
i0.ɵɵelementEnd() // SOURCE: "/extraRootDir/dir/extra.html" </div>
…
i0.ɵɵtextInterpolate(1 + 2) // SOURCE: "/extraRootDir/dir/extra.html" {{ 1 + 2 }}