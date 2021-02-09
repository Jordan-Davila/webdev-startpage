<?php
$data = array();

$data["favorites"] = $favorites;
$data["config"]["root"] = $githubAuthToken;
$data["config"]["tld"] = $tld;
$data["config"]["githubAuthToken"] = $githubAuthToken;
$data["config"]["githubUsername"] = $githubUsername;

$data["sites"] = array_map(function ($site) {
    return basename($site);
}, array_filter(glob($directory), 'is_dir'));

$data = json_encode($data);
