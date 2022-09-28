class Logout {
    page() {
        server.unsetcookie("token");
        server.unsetcookie("fullAccount");
        authentication.page();
    }
}