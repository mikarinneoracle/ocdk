# OCI dependencies in this project

| Item | This project |
|------|----------------|
| **Java** | 11 |
| **OCI FDK** | api + runtime **1.0.209** |
| **OCI Secrets** | `oci-java-sdk-secrets` (property `oci.sdk.version`, default **3.50.2**) |
| **OCI Common** | `oci-java-sdk-common` same version |
| **HTTP client** | `oci-java-sdk-common-httpclient-jersey` (Jersey 2) same version – for Java 11 / FDK compatibility |
| **Jackson** | Explicit `jackson-annotations`, `jackson-core`, `jackson-databind` 2.15.3 to avoid NoSuchMethodError |
| **Shade** | maven-shade-plugin; filters exclude `META-INF/*.SF`, `*.DSA`, `*.RSA` |

To change OCI SDK version, set in `<properties>`:

```xml
<oci.sdk.version>3.50.2</oci.sdk.version>
```

If you move to Java 17 and Jakarta, you can switch to `oci-java-sdk-common-httpclient-jersey3`.
