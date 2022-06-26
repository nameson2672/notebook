use std::process::Command;
use std::env;
use std::ffi::OsStr;

fn main(){
    // let port = env::var("PORT").ok().and_then(|p| p.parse().ok());
    let port  = get_server_port();
    let an_os_str: &OsStr = OsStr::new(&port);
    Command::new("mdbook").arg("build").output();
     Command::new("mdbook").arg("serve").arg("-p").arg(an_os_str).output();

}
fn get_server_port() -> String{
    env::var("PORT").ok().unwrap_or("8080".to_string())
}